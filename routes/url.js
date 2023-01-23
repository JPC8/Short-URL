// import {
//     nanoid
// } from 'nanoid/async'

const express = require('express')

const router = express.Router()

const validUrl = require('valid-url')
// const shortid = require('shortid')
// const shortid = require('nanoid')
// var {
//     nanoid
// } = require("nanoid");
// var shortid = nanoid();

const Url = require('../models/Url')

// const customAlphabet = require('nanoid/async')

// const shortid = customAlphabet('12345abc', 4)

//@route    POST /api/url/shorten
//@desc     Create short URL

// const baseUrl = 'localhost:5000'

router.post('/shorten', async (req, res) => {
    const {
        longUrl
    } = req.body
    //check base url
    // if (!validUrl.isUri(baseUrl)) {
    //     return res.status(401).json('Invalid base URL')
    // }
    // create url code


    const urlCode = URLCode()
    //check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                longUrl
            })
            if (url) {
                res.json(url)
            } else {
                // const shortUrl = baseUrl + '/' + urlCode
                url = new Url({
                    longUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        } catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid longUrl')
    }
})


function URLCode() {
    const {
        customAlphabet
    } = require("nanoid");
    const alphabet = '012345';
    const nanoid = customAlphabet(alphabet, 4);
    return nanoid()
}
module.exports = router