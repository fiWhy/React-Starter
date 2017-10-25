const { folderPath } = require("./text");
const { join } = require("path");
const fs = require("fs");
const { componentsRoot } = require("../config/main")();

const rmdir = path => {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach(file => {
			const curPath = path + "/" + file;
			if (fs.lstatSync(curPath).isDirectory()) {
				rmdir(curPath);
			} else {
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

module.exports.detectPath = (base, input, empty = componentsRoot) => {
	const folder = folderPath(input);
	const cwd = process.cwd();
	const lastIndexOfBase = cwd.lastIndexOf(base);
	const stdCwd = lastIndexOfBase > -1 ? cwd.slice(lastIndexOfBase) : base;
	return folder[0] === "."
		? join(stdCwd, folder)
		: folder ? join(base, folder) : join(base, empty);
};

module.exports.rmdir = rmdir;
