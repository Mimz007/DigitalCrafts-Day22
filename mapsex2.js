<head>
    <title>Exercise2</title>
    <div>
        Select a text file: 
        <input type="file" id="fileInput">
    </div>
    <pre id="displayFile"></pre>
    
    <script>
       var fileInput = document.getElementById('fileInput');
       fileInput.addEventListener('change', function(e) {
              var file = fileInput.files[0];
        	  var reader = new FileReader();
    
              reader.onload = function(e) {
                  document.getElementById('displayFile').innerText = reader.result;
    	  };
        	  reader.readAsText(file);	
          });
    </script>
</head>
<body>
    