function countHours(e,t){
    return t.reduce((t,n)=>{const r=new Date(`${n}/${e}`).getDay();return r>=1&&r<=5&&(t+=2),t},0);   
}