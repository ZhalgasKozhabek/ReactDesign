
import "./style.css";
import {useEffect} from "react";
import Image1 from "./kladka-1.jpg";
import Image2 from "./img-2.jpg";
function Table (){

  useEffect(function ()
  {
    function mySelect() {
      if (!!s1.selectedIndex && !!s2.selectedIndex) {
        t.rows [s2.selectedIndex].cells [s1.selectedIndex].style.backgroundColor = 'lime';
        r.innerHTML = t.rows [s2.selectedIndex].cells [s1.selectedIndex].innerHTML;
      }
    }

    let t = document.getElementById ('tbl');
    let r = document.getElementById ('result');
    let s1 = document.getElementById ('first');
    let s2 = document.getElementById ('second');

    for (let  j = 1; j < t.rows [0].cells.length; j++)
    {
      let op = document.createElement ('option');
      op.text = t.rows [0].cells [j].innerHTML;
      s1.options.add (op);
    }

    for (let  j = 1; j < t.rows.length; j++)
    {
      let op = document.createElement ('option');
      op.text = t.rows [j].cells [0].innerHTML;
      s2.options.add (op);
    }

    s1.onchange = mySelect;
    s2.onchange = mySelect;
  })
  function raschitat() {
    let dlinasten = document.getElementById('dlinasten').value;
    let visotasten  = document.getElementById('visotasten').value;
    let shirinaokna  = document.getElementById('shirinaokna').value;
    let visotaokna  = document.getElementById('visotaokna').value;
    let vsegookon  = document.getElementById('vsegookon').value;
    let shirinadveri  = document.getElementById('shirinadveri').value;
    let visotadveri  = document.getElementById('visotadveri').value;
    let vsegodverei  = document.getElementById('vsegodverei').value;
    let result  = document.getElementById('result').textContent;
    {
      let ploschadsten = parseFloat (dlinasten) * parseFloat (visotasten);
      document.getElementById('ploschadsten').innerHTML = "Площадь стен равна: "+ ploschadsten +" м2";
      let ploshadproemov = parseFloat (shirinaokna)* parseFloat (visotaokna)* parseFloat (vsegookon)+ parseFloat (shirinadveri)* parseFloat (visotadveri)* parseFloat (vsegodverei) ;
      document.getElementById('ploshadproemov').innerHTML = "Площадь проемов равна: "+ ploshadproemov +" м2"
      let vsegokirpichei = Math.ceil((ploschadsten - ploshadproemov) * parseFloat (result));
      document.getElementById('vsegokirpichei').innerHTML = "Итого потребуется: "+ vsegokirpichei +" шт.";
    }
  }

  return (
      <div className="container">
      <div className="price">
        <div className="title">Рассчет количество кирпичей</div>
          <div id="calculator" className="calculator">
            <table cellPadding={4} border id="tbl">
              <tbody><tr>
                    <th>кирпич/кладка</th>
                    <th>Евро</th>
                    <th>Одинарный</th>
                    <th>Полуторный</th>
                    <th>Двойной</th>
                  </tr>
                  <tr>
                    <th>Пол кирпича</th>
                    <td>51</td>
                    <td>51</td>
                    <td>39</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <th>Кирпич</th>
                    <td>141</td>
                    <td>102</td>
                    <td>78</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <th>Полтора кирпича</th>
                    <td>192</td>
                    <td>153</td>
                    <td>117</td>
                    <td>78</td>
                  </tr>
                  <tr>
                    <th>Два кирпича</th>
                    <td>282</td>
                    <td>204</td>
                    <td>156</td>
                    <td>104</td>
                  </tr>
                  <tr>
                    <th>Два с половиной кирпича</th>
                    <td>332</td>
                    <td>255</td>
                    <td>195</td>
                    <td>130</td>
                  </tr>
                  </tbody></table>
                <hr />
                <h4>Числа в ячейках указывают нам количество кирпичей на 1 кв метр штук</h4>
                <hr />
                <p>
                  <select id="first">
                    <option>Размер кирпича</option>
                    <option>Евро</option>
                    <option>Одинарный</option>
                    <option>Полуторный</option>
                    <option>Двойной</option>
                  </select>
                  <select id="second">
                    <option>Вид кладки</option>
                    <option>Пол кирпича</option>
                    <option>Кирпич</option>
                    <option>Полтора кирпича</option>
                    <option>Два кирпича</option>
                    <option>Два с половиной кирпича</option>
                  </select>
                </p><table>
                <colgroup>
                  <col width="70%" />
                  <col width="30%" />
                </colgroup>
                <tbody>
                <tr classname="required">

                  <td>Укажите длину стен по периметру (в метрах)</td>
                  <td><input name="area" type="text" id="dlinasten"  defaultValue placeholder="Укажите длину стен по периметру" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите высоту стен (в метрах)</td>
                  <td> <input type="text" id="visotasten" defaultValue placeholder="укажите высоту стен" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите ширину окна (в метрах)</td>
                  <td> <input type="text" id="shirinaokna" defaultValue placeholder="укажите ширину окна" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите высоту окна (в метрах)</td>
                  <td> <input type="text" id="visotaokna" defaultValue placeholder="укажите высоту окна" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите количество окон (в метрах)</td>
                  <td><input type="text" id="vsegookon" defaultValue placeholder="укажите количество окон" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите ширину двери (в метрах)</td>
                  <td> <input type="text" id="shirinadveri" defaultValue placeholder="укажите ширину двери" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите высоту двери (в метрах)</td>
                  <td>  <input type="text" id="visotadveri" defaultValue placeholder="укажите высоту двери" /></td>
                </tr>
                <tr classname="required">
                  <td>Укажите количество дверей (в метрах)</td>
                  <td> <input type="text" id="vsegodverei" defaultValue placeholder="укажите количество дверей" /></td>
                </tr>
                </tbody>
              </table>
                <p />
                <hr />
                <h5>Вот столько штук уходит на 1 м2:</h5>
                <div id="result"><p>&nbsp;</p> </div>
                 <hr />
                <button className="button button1" onClick={raschitat}>Рассчитать</button>
                <div id="ploschadsten" className="title" />
                <div id="ploshadproemov" className="title" />
                <div id="vsegokirpichei" className="title" />

          </div>

      </div>
        <div className="img">
          <img src={Image1} className="rounded float-left" alt="Cinque"/>
          <img src={Image2} className="rounded float-left" alt="2que"/>
        </div>



      </div>


)
}

export default Table;
