const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');

const DIRECTORIES = ['output_folder', 'manuscript_folder', 'planning_folder'];

/**
 * SMM Module Installer
 * Creates output directories configured in module config
 */
async function install(options) {
  const { projectRoot, config, logger } = options;

  try {
    logger.log(chalk.blue('📚 Installing SMM Module...'));

    for (const configKey of DIRECTORIES) {
      const configValue = config[configKey];
      if (!configValue) continue;

      const dirPath = configValue.replace('{project-root}/', '');
      const fullPath = path.join(projectRoot, dirPath);

      if (!(await fs.pathExists(fullPath))) {
        const dirName = configKey.replace('_', ' ');
        logger.log(chalk.yellow(`Creating ${dirName} directory: ${dirPath}`));
        await fs.ensureDir(fullPath);
      }
    }

    logger.log(chalk.green('✓ SMM Module installation complete'));
    return true;
  } catch (error) {
    logger.error(chalk.red(`Error installing SMM module: ${error.message}`));
    return false;
  }
}

module.exports = { install };
