const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

module.exports = function Hello(settings) {
    if (!settings) {
        settings = {
            portnumber: 3333,
        };
    }

    app.listen(settings.portnumber, () =>
        console.log(
            "\x1b[36m%s\x1b[0m",
            `**Server listening on port ${settings.portnumber}**`
        )
    );
};
