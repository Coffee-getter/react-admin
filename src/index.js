import React from 'react'
import ReactDOM from 'react-dom'
import jsonData from './feiyan-data-list.json'
import './feiyan.css'

console.log(jsonData);


/**想要的形式 */
let provinceObj ={
  // 广东省:{
  //   confirm:0,
  //   heal:0,
  //   dead:0
  // }
}

/**累加 */
jsonData.data.areaTree.forEach((item,i)=>{
  //给空数组附上初值
  if(provinceObj[item.name] === undefined){
    provinceObj[item.name] = {
      confirm : 0,
      heal : 0,
      dead : 0
    }
  }
  

  //判断是不是null，不存在赋值0
  item.today.confirm = item.today.confirm ? item.today.confirm:0;
  item.today.heal = item.today.heal ? item.today.heal:0;
  item.today.dead = item.today.dead ? item.today.dead:0;

  //累加
   provinceObj[item.name] = {
     confirm:provinceObj[item.name].confirm + item.today.confirm ,
     heal:provinceObj[item.name].heal + item.today.heal ,
     dead:provinceObj[item.name].dead + item.today.dead
   }
})



console.log(provinceObj)

/**对象变成数组 用forin */
let provinceList = []
for (const key in provinceObj) {
  provinceObj[key].name = key ;
  provinceList.push(provinceObj[key]);
}
//console.log(provinceList);
/**排序 */
let provinceListSort = provinceList.sort((a,b)=>{
  if(a.confirm < b.confirm){
    return 1;
  }else{
    return -1;
  }
})

console.log(provinceListSort);

class BingLi extends React.Component {
  render(){
    console.log(this.props)
    return(
        <div>
          <h1>中国病情</h1>
          <ul>
            <li>
              <span>地区</span>
              <span>确诊</span>
              <span>治愈</span>
              <span>死亡</span>
            </li>
            {
              this.props.list.map((item,index)=>{
                  return(
                    <li key={index}>
                      <span>{item.name}</span>
                      <span>{item.confirm}</span>
                      <span>{item.heal}</span>
                      <span>{item.dead}</span>
                    </li>
                  )
              })
            }
          </ul>
        </div>
    )
  }
}

ReactDOM.render(
  <BingLi list={provinceListSort} />,
  document.querySelector('#root')
)