html


<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        window.languagePluginUrl = 'https://pyodide-cdn2.iodide.io/v0.15.0/full/';
    </script>
    <script src="https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="styles.css"></link>
</head>
<body>
</body>
</html>


css


body{
  padding: 25px;
}


js

const srccode = fetch("main.py").text();


pyodide.ffi.PyDict loc;
pyodide.ffi.PyDict glo;

let pyodide = await loadPyodide();
await pyodide.loadPackagesFromImports(srccode);

pyodide.pyimport()

pyodide.code.eval_code(srccode, glo, loc);

JSON.stringify;

glo.get("out");
glo.set("alert", alert);//python var, value





