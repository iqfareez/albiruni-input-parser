const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
app.use(cors())


app.get('/', (req, res) => {
    res.render('index.html')

})

app.get('/:input', (req, res) => {
    result = formatInput(req.params.input)
    res.json({ result: result })
})

function formatInput(input) {
    x = input
    if (x != "") {
        x = x.toUpperCase()
        x = x.replace(" ", "");

        spacepos = x.search(/[0-9]/)
        //alert(spacepos)
        if (x.length < 9) {
            //if (x.indexOf(" ") == -1 ){
            //   spacepos = (x.length)-(x.substr(x.length-1,1) != "A"? 4 : 5)
            x = x.substr(0, (spacepos == -1 ? x.length : spacepos)) + (spacepos == -1 ? "" : " ") + (spacepos == -1 ? "" : x.substr(spacepos))
            // }
        }
    }

    return x;
}

app.listen(port, () => {
    console.log(`My terpaling function app listening at http://localhost:${port}`)
})

