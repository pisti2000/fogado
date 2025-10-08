const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mysql = require('mysql');


app.use(cors())
//létrehozzuk az sql lekérdezéshez a kapcsolatot
const db = mysql.createConnection({
  user:"root",
  host: "127.0.0.1",
  port: 3307,
  password:"",
  database: "fogado"
});

app.get('/', (req, res) => {
  res.send('Fut a szerver!'); 
});

app.listen(port, () => {
  console.log(`fut a szerver`);
});

//kiírja a szobák nevét és ágyak számát minden szobatípusra.
app.get("/agy", (req,res) =>
  {
      const sql = "select sznev, agy from `szobak`    ";
      db.query(sql, (err, result) =>{ //lekérdezés végrehajtása
          if(err) return res.json(err); //hiba üzenet visszaadása
          return res.json(result)//visszaadja a lekérdezés eredményét 
  
      })
})
//kiírja, hogy a szobáknak mennyi a kihasználtsága és hány vendég hány éjszakát töltött el a szobában.
app.get("/kihasz", (req,res)=>{
  const sql = "SELECT COUNT(foglalasok.vendeg) AS vendégek, SUM(DATEDIFF(foglalasok.tav, foglalasok.erk)) AS vendégéjszakák FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon GROUP BY szobak.sznev";
  db.query(sql, (err, result) =>{
      if(err) return res.json(err);
      return res.json(result)

  })
})

//kiírja, hogy mi a foglaló neve és mettől-meddig foglalta le a szobát.
app.get("/foglalas", (req,res)=>{
  const sql = "SELECT vendegek.vnev AS nev, DATE_FORMAT(foglalasok.erk, '%Y-%m-%d') AS erkezes, DATE_FORMAT(foglalasok.tav, '%Y-%m-%d') AS tavozas FROM foglalasok INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz ORDER BY vendegek.vnev ASC" ;
  db.query(sql, (err, result) =>{
      if(err) return res.json(err);
      return res.json(result)
  })
})
//törli a 4-es sorszámú vendéget
app.delete("/torol", (req,res)=>{
  const sql = "DELETE FROM vendegek WHERE vsorsz = 4";
  db.query(sql, (err, result) =>{
    if(err) return res.json(err);
    return res.json(result)
})
})
  //a 4-es sorszámú vendéget hozzáadja a "Kiss János" névvel és 6000 irányítószámmal
app.post("/ujvendeg", (req,res)=>{
  const sql = "insert into vendegek (vsorsz, vnev, irsz) values (4, 'Kiss János', 6000)";
  db.query(sql, (err, result) =>{
    if(err) return res.json(err);
    return res.json(result)
})
})

//módosítja a 3-as sorszámú vendég nevét "Nagy Katalin"-ra
app.put("/modosit", (req,res)=>{
  const sql = "UPDATE vendegek SET vnev = 'Nagy Katalin' WHERE vsorsz = 3";
  db.query(sql, (err, result) =>{
    if(err) return res.json(err);
    return res.json(result)
})
})
