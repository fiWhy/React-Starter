const { folderPath, standardSlash } = require("./text");
const { join } = require("path");
const fs = require("fs");

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

const detectPath = (root, input, empty = "./") => {
	const folder = folderPath(input);
	const cwd = process.cwd();
	const lastIndexOfBase = cwd.lastIndexOf(root);
	const stdCwd = lastIndexOfBase > -1 ? cwd.slice(lastIndexOfBase) : root;
	return standardSlash(
		folder[0] === "."
			? join(stdCwd, folder)
			: folder ? join(root, folder) : join(root, empty)
	);
};

const countFoldersFromRoot = (root, input) => {
	const path = detectPath(root, input);
	const slashes = path.match(new RegExp("/", "g"));
	if (slashes) {
		return slashes.length;
	}

	return 0;
};

module.exports.rmdir = rmdir;
module.exports.detectPath = detectPath;
module.exports.countFoldersFromRoot = countFoldersFromRoot;
