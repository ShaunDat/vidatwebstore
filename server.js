var {Pool,Client} = require('pg')
        var Client = new CLient({
        host: 'ec2-34-194-14-176.compute-1.amazonaws.com',
        Database : 'dbtk79um365cib',
        User :'ibdhxhhnmlpocr',
        Port : '5432',
        Password : '9a7801ddf12452c119242073c294b87c749b85a0f1b692a51532b2aa8af333e5',
        }
        )
        Client.connect();
        con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                /*Create a table named "customers":*/
                var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("Table created");
                });
              });
              connect,index.php;
              
            console.log('heroworld')