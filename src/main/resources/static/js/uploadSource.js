/**
 * Created by 杨玉卿 on 2018/4/12.
 */

for(var i=0;i<10;i++){
    var oDiv=$("#myTaskName");
    var my_option=$("<option></option>");
    my_option.append(i);
    // my_option.attr('value',i);
    // console.log(my_option.value);
    oDiv.append(my_option);
}
$("#myTaskName").focus(function(){
    var oDiv=$("#myTaskName");
    oDiv.html("");
    var projectName=$("#projectName").val();
    console.log(projectName);
    $.ajax({
        type:"get",
        url:"/",
        dataType:"json",
        data:{
            'projectName':projectName
        },
        success:function(data){
            var oDiv=$("#myTaskName");
            oDiv.html("");
            for(var i in data){
                var my_option=$("<option></option>");
                my_option.append(data[i]);
                oDiv.append(my_option);
            }
        },
        error:function(){
            alert("上传资源失败！");
        }

    });
});
$("#uplBtn").click(function(event){
    event.preventDefault();
    if($("#projectName").val()=="项目名"){
        alert("请填写项目名！");
    }
    else if($("#myTaskName").val()==null){
        alert("请选择任务名称！");
    }
    else if($("#upl").val()==""){
        alert("请选择上传文件");
    }
    else{
        alert("上传成功！");
        $("#uploadForm").submit();
    }
});