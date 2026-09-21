export type Question = { id:string; category:string; difficulty:'Fácil'|'Médio'|'Difícil'; type:'open'|'multiple'; prompt:string; answer:string; options?:string[] }
export const starterQuestions:Question[]=[
{id:'1',category:'Geografia',difficulty:'Fácil',type:'multiple',prompt:'Qual é a capital do Brasil?',answer:'Brasília',options:['Brasília','Salvador','Rio de Janeiro','São Paulo']},
{id:'2',category:'Ciência',difficulty:'Fácil',type:'multiple',prompt:'Qual planeta é conhecido como Planeta Vermelho?',answer:'Marte',options:['Vênus','Marte','Júpiter','Mercúrio']},
{id:'3',category:'História',difficulty:'Médio',type:'open',prompt:'Em que ano o Brasil declarou sua independência?',answer:'1822'},
{id:'4',category:'Artes',difficulty:'Médio',type:'open',prompt:'Quem pintou a obra Mona Lisa?',answer:'Leonardo da Vinci'},
{id:'5',category:'Natureza',difficulty:'Fácil',type:'multiple',prompt:'Qual é o maior animal terrestre?',answer:'Elefante-africano',options:['Rinoceronte','Girafa','Elefante-africano','Hipopótamo']},
{id:'6',category:'Esportes',difficulty:'Fácil',type:'multiple',prompt:'Quantos jogadores cada time tem em campo no futebol?',answer:'11 jogadores',options:['9 jogadores','10 jogadores','11 jogadores','12 jogadores']},
{id:'7',category:'Literatura',difficulty:'Médio',type:'open',prompt:'Quem escreveu Dom Casmurro?',answer:'Machado de Assis'},
{id:'8',category:'Ciência',difficulty:'Médio',type:'multiple',prompt:'Qual elemento químico tem o símbolo Au?',answer:'Ouro',options:['Prata','Ouro','Alumínio','Cobre']},
{id:'9',category:'Geografia',difficulty:'Difícil',type:'open',prompt:'Qual é o menor país do mundo em território?',answer:'Vaticano'},
{id:'10',category:'Música',difficulty:'Médio',type:'multiple',prompt:'Quantas notas formam a escala musical diatônica?',answer:'Sete',options:['Cinco','Seis','Sete','Oito']},
{id:'11',category:'Tecnologia',difficulty:'Fácil',type:'open',prompt:'O que significa a sigla WWW?',answer:'World Wide Web'},
{id:'12',category:'Curiosidades',difficulty:'Difícil',type:'multiple',prompt:'Qual é o único mamífero capaz de voar de verdade?',answer:'Morcego',options:['Esquilo-voador','Morcego','Colugo','Petauro']}
]
