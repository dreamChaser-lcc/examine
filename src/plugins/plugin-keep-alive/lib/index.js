"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _umi = require("umi");

var _path = require("path");

var _fs = require("fs");

var _utils = require("@umijs/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = api => {
  var _getFile;

  api.addRuntimePlugin({
    fn: () => '@@/plugin-keep-alive/runtime',
    stage: -1 * Number.MAX_SAFE_INTEGER
  }); // 因 keep-alive 的 runtime 部分选择不渲染其 children，可能会丢失默认的用户 rootContainer
  // 此处修复自定义 rootContainer
  // https://github.com/umijs/umi/blob/master/packages/preset-built-in/src/plugins/generateFiles/core/plugin.ts#L23-L27

  const customizedAppPath = (_getFile = (0, _utils.getFile)({
    base: api.paths.absSrcPath,
    fileNameWithoutExt: 'app',
    type: 'javascript'
  })) === null || _getFile === void 0 ? void 0 : _getFile.path;

  if (customizedAppPath) {
    api.addRuntimePlugin({
      fn: () => '@@/plugin-keep-alive/fixCustomizedRuntime',
      stage: -1 * Number.MAX_SAFE_INTEGER + 1
    });
    api.onGenerateFiles( /*#__PURE__*/_asyncToGenerator(function* () {
      api.writeTmpFile({
        path: 'plugin-keep-alive/fixCustomizedRuntime.tsx',
        content: _umi.utils.Mustache.render((0, _fs.readFileSync)((0, _path.join)(__dirname, 'fixCustomizedRuntime.tsx.tpl'), 'utf-8'), {})
      });
    }));
  } // Babel Plugin for react-activation


  api.modifyBabelOpts(babelOpts => {
    babelOpts.plugins.push([require.resolve('react-activation/babel')]);
    return babelOpts;
  }); // 生成：export * from 'react-activation'
  // 业务中可 import { KeepAlive } from 'umi'

  api.addUmiExports(() => [{
    exportAll: true,
    source: 'react-activation'
  }]);
  api.onGenerateFiles( /*#__PURE__*/_asyncToGenerator(function* () {
    api.writeTmpFile({
      path: 'plugin-keep-alive/runtime.tsx',
      content: _umi.utils.Mustache.render((0, _fs.readFileSync)((0, _path.join)(__dirname, 'runtime.tsx.tpl'), 'utf-8'), {})
    });
  }));
};

exports.default = _default;