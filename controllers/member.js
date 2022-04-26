const memberService = require('../services/member')

exports.getMember = async function sayHello(req,res) {
    const data = await memberService.findmember();
    res.status(200).json(data);
}

exports.createMember = async (req,res) =>{
    try{
        const body = req.body;
        await memberService.createMember(body.firstname, body.lastname);
        res.status(201).json({
            status: true,
            message: 'Member created successfully'
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
exports.deleteMember = async (req,res) =>{
    const id = req.params.id;
    
    try{
        await memberService.deleteMember(id);
        res.json({
            status: true,
            message: "Remove success"
        });
    }
    catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}
    