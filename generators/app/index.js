const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the ${chalk.red('nextjs-template')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What is your project name?',
        default: 'web'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
        default: 'web'
      },
      {
        type: 'input',
        name: 'name',
        message: 'You Name?',
        default: 'name'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this._writingPackageJSON();
    this._writingGit();
    this._writingBabel();
    this._writingEnv();
    this._writeEslint();
    this._writeSasslint();
    this._writeConfigFiles();
    this._writeDocker();
    this._writeFolders();
  }

  _writingPackageJSON() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(`./${this.props.appName}/package.json`),
      {
        appName: this.props.appName,
        description: this.props.description,
        name: this.props.name
      }
    );
  }

  _writingGit() {
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('./' + this.props.appName + '/.gitignore')
    );
  }

  _writingBabel() {
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('./' + this.props.appName + '/.babelrc')
    );
  }

  _writingEnv() {
    this.fs.copy(
      this.templatePath('env'),
      this.destinationPath('./' + this.props.appName + '/.env')
    );
  }

  _writeEslint() {
    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('./' + this.props.appName + '/.eslintignore')
    );
    this.fs.copy(
      this.templatePath('_eslintrc.js'),
      this.destinationPath('./' + this.props.appName + '/.eslintrc.js')
    );
  }

  _writeSasslint() {
    this.fs.copy(
      this.templatePath('sasslintrc'),
      this.destinationPath('./' + this.props.appName + '/.sasslintrc')
    );
  }

  _writeDocker() {
    this.fs.copy(
      this.templatePath('docker-compose.yml'),
      this.destinationPath('./' + this.props.appName + '/docker-compose.yml')
    );
    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('./' + this.props.appName + '/Dockerfile')
    );
  }

  _writeConfigFiles() {
    this.fs.copy(
      this.templatePath('global-config.js'),
      this.destinationPath('./' + this.props.appName + '/global-config.js')
    );
    this.fs.copy(
      this.templatePath('_jest.config.js'),
      this.destinationPath('./' + this.props.appName + '/jest.config.js')
    );
    this.fs.copy(
      this.templatePath('_jest.setup.js'),
      this.destinationPath('./' + this.props.appName + '/jest.setup.js')
    );
    this.fs.copy(
      this.templatePath('next.config.js'),
      this.destinationPath('./' + this.props.appName + '/next.config.js')
    );
    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('./' + this.props.appName + '/postcss.config.js')
    );
  }

  _writeFolders() {
    this.fs.copy(
      this.templatePath('assets'),
      this.destinationPath('./' + this.props.appName + '/assets')
    );
    this.fs.copy(
      this.templatePath('components'),
      this.destinationPath('./' + this.props.appName + '/components')
    );
    this.fs.copy(
      this.templatePath('configs'),
      this.destinationPath('./' + this.props.appName + '/configs')
    );
    this.fs.copy(
      this.templatePath('lib'),
      this.destinationPath('./' + this.props.appName + '/lib')
    );
    this.fs.copy(
      this.templatePath('locales'),
      this.destinationPath('./' + this.props.appName + '/locales')
    );
    this.fs.copy(
      this.templatePath('pages'),
      this.destinationPath('./' + this.props.appName + '/pages')
    );
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('./' + this.props.appName + '/server.js')
    );
  }

  install() {
    process.chdir(this.destinationPath('./' + this.props.appName));
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
};
