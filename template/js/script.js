$(function(){

var html = $('#temp').html();

var cv = [
{
  name: 'Andrii TRASHKALOV',
  img: 'img/img.jpg',
  position: 'Student GoIT!;',
  valeu1:'I like teamwork;',
  valeu2:'In childhood I liked programing;',
  valeu3:'front end  combain visual and logic;',
  phoneNumber:'+38 099 421 49 03',
  socialWeb:'https://www.instagram.com/trashkaloff/',
  feedback: 'If you need I can creat commercial movie etc.',
},
{
  name: 'Mark Zuckerberg',
  img: 'img/img2.jpg',
  position: 'Founder and CEO в Facebook',
  valeu1:'I know FE since childhood',
  valeu2:'I became success thanks FE',
  valeu3:'I wish all students GoIT ---- success ',
  phoneNumber:'+38 80 892 921',
  socialWeb:'https://www.facebook.com/zuck?fref=ts',
  feedback: 'When I was a baby and took my first steps, my mom wrote the date in a baby book',
},


];


var content = tmpl(html, {
  data:cv
});

$('body').append(content);

});
