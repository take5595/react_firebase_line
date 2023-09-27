import classes from '../styles/links.module.css'


const ITEMS = [
  {href:"https://www.google.com/",
  title:"Google"},
  {href:"https://www.apple.com/",
  title:"Apple"},
  {href:"https://www.facebook.com/",
  title:"Facebook"},
  {href:"https://www.amazon.com/",
  title:"amazon"}
]

export  function Links() {
    return (
      <div className={classes.links}>
        {/* <div className={classes.footer}>111aasdfasdfsdf</div> */}
        {/* <div>これはLinks</div> */}
        {ITEMS.map(item =>{
          return(
            <a key={item.href} href={item.href} className={classes.linkcomp}>
              <p>{item.title}</p>
            </a>
            
          )
        })}
      </div>
    )
  }
  