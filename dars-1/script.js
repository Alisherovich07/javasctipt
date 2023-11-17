let mustafo = {
    ism: "Mustafo",
    shahar: "Qo'qon",
    yoshi: 16,
    maktab: 15,
    qiziqish: "dasturlash sohasiga",
    sohasi: {
        texnologiya: "Html, Css, Javascript, Bootstrap, Php, Mysql, React",
    }
};

function Hello(){
    console.log(`Mening ismim ${mustafo.ism}. ${mustafo.shahar} shahrida tug'ilganman. Yoshim ${mustafo.yoshi}da. 
    ${mustafo.maktab}-maktabni tamomlab hozirda akademik litseyda tahsil olyabman.     
    ${mustafo.qiziqish}ga qiziqaman. Hozirda "${mustafo.sohasi.texnologiya}" texnologiyalari bilan ishlayman`);
};

Hello();

