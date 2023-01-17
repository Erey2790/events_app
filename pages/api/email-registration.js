import path from 'path'
import fs from 'fs'

function buildPath() {
    return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)
    return data;
}
export default function handler(req, res) {
    const { method } = req;

    // Access our data
    // extract our Data
    // res 404 if there are no allEvents
    // AllEvents- loop through them and identify the EventID
    // add the email - write on our data
    // only if that email doesnt exist
    // check the format of the email is ok
    const filePath = buildPath();
    const {events_categories, allEvents } = extractData(filePath)


    if (method === 'POST') {
        const{ email, eventId } = req.body;

        const newAllEvents = allEvents.map((ev) => {
            if(ev.id === eventId) {
                if(ev.emails_registered.includes(email)) {
                    res.status(201).json({message: 'This email has already beeb registered'})
                }
                return {
                    ...ev, emails_registered:[...ev.emails_registered, email]
                }
            }
            return ev;
        });

        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))
        // we add our code here
        if(!allEvents) {
            return res.status(404)
        }
        res.status(200).json({message: `You have been registered successfully with the email: ${email} ${eventId}`});
    }
}