import { Serie } from './serie.js'
import { series } from './data.js'

const seriesTB = document.getElementById('series-data')!;

renderSeriesInTable(series);
getPromSeasons(series);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                               <td>${s.name}</td>
                               <td>${s.platform}</td>
                               <td>${s.seasons}</td>`;
        seriesTB.appendChild(trElement);
  });
}
  
function getPromSeasons(series: Serie[]): void {
  let trElement = document.createElement("p");
  let totalSeasons: number = 0;
  let count: number = 0;
  series.forEach(s => {
    totalSeasons = totalSeasons + s.seasons;
    count += 1
  });
  if(count === 0){
    trElement.innerHTML = count.toString();
  } else {
    let answer = totalSeasons / count;
    trElement.innerHTML = 'Seasons average: '+answer.toString();
  }
  seriesTB.appendChild(trElement);
};
