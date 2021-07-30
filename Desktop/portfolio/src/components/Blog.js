import React from 'react'; 

function Blog() {
    return (
        <div className="blog-wrapper" style={{ backgroundImage: "url(https://vanillapapers.net/wp-content/uploads/2019/07/photo-1-1.jpg)",
                                               backgroundPosition: 'center', 
                                               backgroundSize: 'cover',
                                               backgroundRepeat: 'no-repeat',
                                               height: '70vh',   
        
        }} > 
            <div className="blog-info" style={{
                                                    display: 'flex',
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    bottom: '0',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                     }}> 


              <h1 style={{color: 'var(--primary-orange)'}}> Check out my blog on Medium  </h1>
            </div>
        </div>
    )
}


export default Blog 