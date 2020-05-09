/**
 * Created by Administrator on 2017/10/24 0024.
 */
var express = require("express");

var router=express.Router();
var multiparty = require('multiparty');

//nodejs教程 40

router.get('/',function(req,res){

    res.send('前台首页')
})


//给编辑器提供的上传图片的接口
router.post('/imgupload',function(req,res){
    
    console.log('imgupload');

    var form = new multiparty.Form();
    form.uploadDir='public/upload'  /*设置图片上传的路径*/

    form.parse(req, function(err, fields, files) {

		console.log(files); //文件

		console.log(fields); //post数据

        var path="/"+files.file[0].path;

        res.json({"success":"true","path":path})  /*给编辑器返回地址信息*/

    });
})


module.exports=router;