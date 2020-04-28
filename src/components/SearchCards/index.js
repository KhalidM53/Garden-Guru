import React from "react";
import './style.css'

function SearchResults(props) {

return (
  <React.Fragment>
      <div id="services" className="services-area section-padding col-xs-12 col-sm-6 col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header">
                            <p className="line1"></p>
                            <p className="line2"></p>
                        </div>
                    </div>
                </div>
                  <div className= "row">
                    <div className="col-xs-12 col-sm-6 col-md-12">
                    { props.results && props.results.length > 0 
                      ?  
                      props.results[0] === "" 
                      ?
                      <p></p> 
                      :
                      props.results.map(item => (
                      <div key={item.id} className="plant-card single-services text-center wow fadeInDown" data-wow-delay="0.2s">
                        <div className="services-content">
                          <h4 className='common-name'>{item.common_name}</h4>
                            <h4>{item.scientific_name}</h4>
                            <p>{item.family_common_name}</p>
                              <button className='common-name add-button'
                              data-id={item.id}
                              data-name={item.common_name}
                              data-scientific={item.scientific_name}
                              onClick={(event)=>{
                                const data = {...event.target.dataset}

                                fetch("/api", {
                                  method:"POST",
                                  body: JSON.stringify(data),
                                  headers: {
                                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                                    'Content-type': 'application/json'
                                  }
                                  })
                                  .then(alert(`Plant was added to your garden!`))
                                  .catch(err=>{console.log(err)})
                                }}>Add {item.common_name} to my garden!</button>
                          </div>
                        </div>
                          )) : <p className="no-results">Sorry we dont have that plant in our records yet, hopefully it will be added soon as our library is ever growing!</p>}
                      </div>
                    </div>
                  </div>
                </div>
      </React.Fragment>
)};

    export default SearchResults;
  