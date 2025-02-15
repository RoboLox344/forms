// Подключаем модули
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const data = require('./data.json');


const app = express();


app.use(cors()); // Для кросс-доменных запросов
app.use(bodyParser.json()); // Для обработки JSON в теле запросов

let nextId = data.vacancies.length > 0 ? Math.max(...data.vacancies.map(posting => posting.id)) + 1 : 1;

const writeDataToFile = () => {
    fs.writeFileSync('./data.json', JSON.stringify({ vacancies: data.vacancies }, null, 2), 'utf8');
  };


app.get('/api/req/all', (req, res) => {
    const coll = new Set(["id", "nameVacancy", "region", "address", "dateBegin", "salBegin", "salEnd", "experience", "metro" ]) 

    const filterData = data.vacancies.map(item => {
        const filteredItem = {};
        Object.keys(item).forEach(key => {
          if (coll.has(key)) {
            filteredItem[key] = item[key];
          }
        });
        return filteredItem;
      })
  res.json(filterData);
});

app.get('/api/req/:id', (req, res) => {
    const {id}  = req.params
    console.log(id)
    const filterData = data.vacancies.filter(item => item.id === Number(id))
    res.json(filterData[0])
})


app.post('/api/job_postings', (req, res) => {
    const jobPosting = req.body;
    const newJobPosting = { ...jobPosting, id: nextId };
    data.vacancies.push(newJobPosting);
    nextId += 1;
    writeDataToFile(); // Сохраняем изменения в файл
    res.status(201).json(newJobPosting);
});

app.put('/api/job_postings/:id', (req, res) => {
    const { id } = req.params;
    const updatedPosting = req.body;

    const index = data.vacancies.findIndex(posting => posting.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Job posting not found' });
    }

    data.vacancies[index] = { ...updatedPosting, id: parseInt(id) };
    writeDataToFile(); // Сохраняем изменения в файл
    res.json(data.vacancies[index]);
});


// app.post('/submit', (req, res) => {
//   const { name, email } = req.body; // Получаем данные из запроса
//   res.json({ message: `Data received: ${name}, ${email}` });
// });

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});