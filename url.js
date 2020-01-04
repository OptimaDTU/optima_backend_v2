
let env = 1;

let urls=  {}

if(env == 1){  //development
    urls = {
        domain : "http://localhost:3000"
    }
}

if(env == 2){  //production
    urls = {
        domain : ""
    }
}

module.exports = urls;