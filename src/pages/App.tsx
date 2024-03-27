import * as React from 'react';

//console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            <link href="/public/static/main.css" rel="stylesheet" />
        </head>
        <body>
            <div id="app"></div>
            <script type="module" src="/public/static/main.js"></script>
        </body>
    </html>
    );
}
/*
<a href="/">[ home ]</a>
<a href="/about">[ about ]</a>
<a href="/test">[ test ]</a>
<hr />
<h1 className="text-4xl font-bold">Hello!!</h1>
*/