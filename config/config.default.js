'use strict';
const path = require('path');

module.exports = (appInfo) => {
  const config = {
    server    : {
      host: '10.1.1.168',
      port: 7002
    },
    keys      : appInfo.name + '_1501073549656_263',
    static    : {
      prefix: '/assets/'
    },
    view      : {
      defaultViewEngine: 'ejs',
      defaultExtension : '.ejs',
      mapping          : {
        '.ejs': 'ejs'
      },
      root             : [
        path.join(appInfo.baseDir, 'app/view'),
        path.join(appInfo.baseDir, 'path/to/another')
      ].join(',')
    },
    security  : {
      domainWhiteList: [],
      csp            : { enable: false },
      xframe         : { value: 'SAMEORIGIN' },
      csrf           : {
        enable     : false,
        useSession : true,          // if useSession set to true, the secret
                                    // will keep in session instead of
        // cookie
        ignoreJSON : true,          // skip check JSON requests if ignoreJSON
                                    // set to true
        cookieName : 'csrfToken',    // csrf token's cookie name
        sessionName: 'csrfToken',   // csrf token's session name
        headerName : 'x-csrf-token', // request csrf token's name in header
        bodyName   : '_csrf',          // request csrf token's name in body
        queryName  : '_csrf'         // request csrf token's name in query
      }
    },
    session   : {
      path    : '/',
      httpOnly: true,
      rewrite : true,
      signed  : true
    },
    jwt       : {
      secret: '123456'
    },
    bodyParser: {
      enableTypes: [
        'json', 'form', 'text'
      ],
      jsonLimit  : '10mb',
      textLimit  : '10mb'
    },
    xmlParser : {
      limit   : 128,
      length  : 200,
      encoding: 'utf8',
      onerror : (err, ctx) => {
        ctx['throw'](err.status, err.message);
      }
    },
    compress  : {
      threshold: 1024
    }
  };
  return config;
};
