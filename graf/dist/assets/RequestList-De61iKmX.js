import{u as m,j as s,R as x,r as o}from"./index-B3v3lFe8.js";import{g}from"./api-B4R3ltDK.js";const h="data:image/svg+xml,%3csvg%20className='svg-change'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.9813%201.6895C16.4228%201.24802%2017.0216%201%2017.6459%201C17.9551%201%2018.2612%201.06089%2018.5468%201.17919C18.8324%201.2975%2019.0919%201.4709%2019.3105%201.6895C19.5291%201.90809%2019.7025%202.16761%2019.8208%202.45322C19.9391%202.73883%2020%203.04494%2020%203.35409C20%203.66323%2019.9391%203.96935%2019.8208%204.25496C19.7025%204.54057%2019.5291%204.80008%2019.3105%205.01868L5.43891%2018.8903L1%2020L2.10973%2015.5611L15.9813%201.6895Z'%20stroke='%234C73E3'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function p({id:t}){const a=m(),r=()=>{t&&a(`/request/${t}`)};return s.jsx("button",{className:"change-btn",onClick:r,children:s.jsx("img",{src:h,alt:"ChangeBtn"})})}const L="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0007%2018.3333L9.44862%2018.841C9.59064%2018.9955%209.79085%2019.0833%2010.0007%2019.0833C10.2105%2019.0833%2010.4107%2018.9955%2010.5527%2018.841L10.0007%2018.3333ZM14.7147%2013.2077L14.1627%2012.7L14.7147%2013.2077ZM5.28661%2013.2077L5.83864%2012.7L5.28661%2013.2077ZM5.2866%202.95645L4.73457%202.44875L4.73457%202.44875L5.2866%202.95645ZM14.7147%202.95645L15.2667%202.44875V2.44875L14.7147%202.95645ZM10.5527%2018.841L15.2667%2013.7154L14.1627%2012.7L9.44862%2017.8256L10.5527%2018.841ZM4.73458%2013.7154L9.44862%2018.841L10.5527%2017.8256L5.83864%2012.7L4.73458%2013.7154ZM4.73457%202.44875C1.86712%205.56656%201.86712%2010.5976%204.73458%2013.7154L5.83864%2012.7C3.4991%2010.1562%203.4991%206.00795%205.83864%203.46415L4.73457%202.44875ZM15.2667%202.44875C12.3661%20-0.705124%207.63519%20-0.705124%204.73457%202.44875L5.83864%203.46415C8.14501%200.956407%2011.8563%200.956407%2014.1627%203.46415L15.2667%202.44875ZM15.2667%2013.7154C18.1342%2010.5976%2018.1342%205.56656%2015.2667%202.44875L14.1627%203.46415C16.5022%206.00795%2016.5022%2010.1562%2014.1627%2012.7L15.2667%2013.7154ZM11.75%207.50001C11.75%208.46651%2010.9665%209.25001%2010%209.25001V10.75C11.7949%2010.75%2013.25%209.29493%2013.25%207.50001H11.75ZM10%205.75001C10.9665%205.75001%2011.75%206.53351%2011.75%207.50001H13.25C13.25%205.70508%2011.7949%204.25001%2010%204.25001V5.75001ZM8.25%207.50001C8.25%206.53351%209.0335%205.75001%2010%205.75001V4.25001C8.20507%204.25001%206.75%205.70508%206.75%207.50001H8.25ZM10%209.25001C9.0335%209.25001%208.25%208.46651%208.25%207.50001H6.75C6.75%209.29493%208.20507%2010.75%2010%2010.75V9.25001Z'%20fill='%234C73E3'/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20width='19'%20height='20'%20viewBox='0%200%2019%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.032%2013.103L6.536%204.5L9.5%209.5291L12.452%204.5L15.968%2013.103H17V14.4069H11.696V13.103H12.488L11.72%2010.961L9.5%2014.5L7.28%2010.961L6.512%2013.103H7.304V14.4069H2V13.103H3.032Z'%20fill='%23FF0013'/%3e%3c/svg%3e",j=x.memo(({id:t,address:a,dateBegin:r,experience:e,metro:i,nameVacancy:l,region:n,salBegin:c})=>{const d=r.split("T").slice(0,1).join("").split("-").reverse().join(".");return s.jsxs("div",{className:"request-item-wp",id:String(t),children:[s.jsxs("div",{className:"req-haeder",children:[s.jsxs("p",{style:{margin:0},children:["Дата публикации:",d&&d]}),s.jsx(p,{id:t})]}),s.jsxs("div",{className:"req-body",children:[s.jsx("div",{className:"req-name-wp",children:s.jsx("h2",{className:"name-req",style:{textAlign:"start"},children:l&&l})}),s.jsxs("div",{className:"req-more-info-wp",children:[s.jsxs("div",{className:"req-address-wp",children:[s.jsx("img",{src:L,alt:"addresSvg"}),s.jsxs("p",{className:"supp-text",children:[n&&n,", ",a&&a]})]}),s.jsxs("div",{className:"req-metro-salary-wp",children:[s.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[s.jsxs("p",{className:"req-price",children:["от ",c&&c.toLocaleString("ru")]}),s.jsx("span",{className:"supp-text",children:"на руки"})]}),s.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[s.jsx("span",{className:"supp-text",children:"Требуемый опыт:"}),s.jsx("p",{className:"req-price",children:e&&e})]}),s.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[s.jsx("img",{src:v,alt:"metroSvg"}),s.jsx("p",{className:"supp-text",children:i&&i})]})]})]})]})]})});function w(){const[t,a]=o.useState([]),r=async()=>{try{const e=await g();e&&a([...e])}catch(e){console.error("error",e)}};return o.useEffect(()=>{r()},[]),s.jsx("main",{children:s.jsx("section",{id:"requestList",children:s.jsxs("div",{className:"container",style:{display:"flex",flexDirection:"column",gap:56,marginBottom:106},children:[s.jsx("h1",{style:{textAlign:"start",color:"#4c73e3"},children:"Заявки на размещение вакансий"}),s.jsx("div",{className:"request-list-wp",children:t&&t.map(e=>s.jsx(j,{...e},e.id))})]})})})}export{w as default};
