const nodemailer = require('nodemailer');

async function test(req, res) {
    return res.status(200).json({ msg: "Test" });
}

async function handler(req, res) {

    if (!req.body) {
        return res.status(400).json({ error: "body required" });
    }

    if (!req.files) {
        return res.status(400).json({ error: "files required" });
    }

    const body = req.body;
    const images = req.files;

    console.log(images);

    //Configurar el objeto de transporte para enviar correos electrónicos
    const transporter = nodemailer.createTransport({
        // Configuración del servidor SMTP
        host: 'smtp.ipower.com',
        port: 465,
        secure: true,
        auth: {
            user: 'protostarwebdev1@ogprotostar.com',
            pass: 'Merida$123',
        },   
    });

    try {
        // Enviar el correo electrónico
        const info = await transporter.sendMail({
            // Configuración del correo electrónico
            from: 'protostarwebdev1@ogprotostar.com',
            to: 'protostarwebdev1@ogprotostar.com',
            subject: 'Apply form',
            text: 'Contenido del correo electrónico en texto sin formato',
            html: `<h1>Apply:</h1>
            <ol>
            <li>Full Name / Nombre Completo</li>
            <p>${body.full_name}</p>

            <li>Stage name / Nombre artístico</li>
            <p>${body.stage_name}</p>

            <li>Email / Correo Electronico</li>
            <p>${body.email}</p>

            <li>Nacionality / Nacionalidad</li>
            <p>${body.nacionalabelty}</p>

            <li>Current City / Ciudad Actual</li>
            <p>${body.city}</p>

            <li>Address / Dirección</li>
            <p>${body.address}</p>

            <li>Postal Code</li>
            <p>${body.postal_code}</p>

            <li>Airport or Main Train station closest to you / Aeropuerto o estación de tren principal cerca de ti</li>
            <p>${body.transport}</p>

            <li>Weight (lb) / Peso (Kilos)</li>
            <p>${body.weight}</p>

            <li>Height (In ft) / Altura ( En cm)</li>
            <p>${body.height}</p>

            <li>Date of Birth / Fecha de Nacimiento</li>
            <p>${body.birthday}</p>

            <li>English Level / Nivel de Inglés</li>
            <p>${body.english_level}</p>

            <li>You have modeled or filmed nude before? / Usted ha modelado o filmado desnudo anteriormente?</li>
            <p>${body.experience}</p>

            <li>Sexual Orientation / Orientación Sexual </li>
            <p>${body.sexual_orientation}</p>

            <li>Please mention projects you are interested participating in / Favor de indicar en que proyectos le interesa participar actualmente. Ej: Gay, Bisexual or Heterosexual.</li>
            <p>${body.projects}</p>

            <li>Physical complexion. Ej: twink, slim, toned, average, muscular, stocky or chubby / Complexión Física. Ejemplo: esbelto, tonificado, promedio, musculoso, fornido </li>
            <p>${body.complexion}</p>

            <li>What is your dick size? / ¿Cuál es el tamaño de tu pene? </li>
            <p>${body.dick_size}</p>

            <li>Foreskin? / ¿Prepucio?</li>
            <p>${body.foreskin}</p>

            <li>Alternate photo of your face, if it has a different style or "look" that you consider to look better than the first photo / Foto alternada de su cara, si tiene un estilo diferente o "look" que considere que se vea mejor que la primera foto. </li>
            <img src="cid:face"/>

            <li>Photo of your face, make sure the photo is CLOSE and CLEAR. (No caps, no glasses, or other distractions) / Foto de su cara, asegurarse de que las fotos sea CERCA y CLARA. (Sin gorras, lentes u otras distracciones) </li>
            <img src="cid:alternate_face"/>

            <li>Clear photo of your torso (head to waist). The photo must be recent and accurately represent your current appearance / Foto con claridad de su torso (cabeza a cintura) sin interrupciones. La foto debe ser reciente y representar exactamente su apariencia actual. </li>
            <img src="cid:torso"/>

            <li>Front Full Body Photo (nude) / Foto de frente de cuerpo completo (desnudo) </li>
            <img src="cid:front_body"/>

            <li>Side Full Body Photo (nude) / Foto de lado de cuerpo completo (desnudo) </li>
            <img src="cid:side_body"/>

            <li>Any other photo that you think will help us evaluate you as a model / Cualquier otra foto que considere que nos sea de ayuda a evaluarlo(a) como modelo.</li>
            <img src="cid:other"/>

            <li>Sexual Positions / ¿Posiciones sexuales preferidas? </li>
            <p>${body.positions}</p>

            <li>I am comfortable with having bareback sex / ¿Me siento cómodo teniendo sexo sin condón? </li>
            <p>${body.bareback_sex}</p>

            <li>Cell Phone / Numero Celular </li>
            <p>${body.phone}</p>

            <li>Whatsapp (Optional)</li>
            <p>${body.whatsapp}</p>

            <li>Facebook (Optional)</li>
            <p>${body.facebook}</p>

            <li>Instagram (Optional)</li>
            <p>${body.instagram}</p>

            <li>Twitter (Optional)</li>
            <p>${body.twitter}</p>

            <li>Referred by / Referido por</li>
            <p>${body.referred}</p>
            </ol>`,
            attachments: [
                {
                    filename: `${images.face.originalFilename}`,
                    path: `./${images.face.path}`,
                    cid: 'face'
                },
                {
                    filename: `${images.alternate_face.originalFilename}`,
                    path: `./${images.alternate_face.path}`,
                    cid: 'alternate_face'
                },
                {
                    filename: `${images.torso.originalFilename}`,
                    path: `./${images.torso.path}`,
                    cid: 'torso'
                },
                {
                    filename: `${images.front_body.originalFilename}`,
                    path: `./${images.front_body.path}`,
                    cid: 'front_body'
                },
                {
                    filename: `${images.side_body.originalFilename}`,
                    path: `./${images.side_body.path}`,
                    cid: 'side_body'
                },
                {
                    filename: `${images.other.originalFilename}`,
                    path: `./${images.other.path}`,
                    cid: 'other'
                }
            ]
        });
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error sending email' });
    }
}

module.exports = {
    handler,
    test
}
