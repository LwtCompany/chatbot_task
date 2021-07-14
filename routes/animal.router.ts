import express from 'express';
import fetch, { RequestInfo } from 'node-fetch'
const router = express.Router();
import Animal from "../models/animal.model";


interface Dog{
    fileSizeBytes: number,
    url: string
}

 async function http<T>( request: RequestInfo): Promise<T>{
    const response = await fetch(request);
    const body = await response.json();
    return body;
}


router.post('/upload', async (req, res, next) => {
    try {
        const {name, color} = req.body;
        const response = await http<Dog>('https://random.dog/woof.json');
        
        if(response.url.includes(".mp4")){
            return res.status(200).send({
                message: 'sorry returned video',
                status: false,
                data: {}
            });
        }
        
        const animal_data = Animal.create({
            name: name,
            color: color,
            fileSizeBytes: response.fileSizeBytes,
            url: response.url
        });

        return res.status(200).send({
            message: 'success',
            status: true,
            data: animal_data
        });

    } catch (error) {
        return res.status(200).send({
            message: "error",
            status: false,
            data: error+""
        });
    }
});

router.get('/list', async(req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(200).send({
            message: "error",
            status: false,
            data: error+""
        });
    }
})

export = router;