import React from 'react'; 

function Blog() {
    return (
        
        <div className="blog-wrapper" style={{ backgroundImage: "url(https://vanillapapers.net/wp-content/uploads/2019/07/photo-1-1.jpg)",
                                               backgroundPosition: 'center', 
                                               backgroundSize: 'cover',
                                               backgroundRepeat: 'no-repeat',
                                               height: '70vh', 
                                                 
        
        }} > 
        <div className="blog" >
            <h1 style={{color: 'var(--primary-orange)',
                            display: 'flex',
                            flexDirection: 'column',
                            
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',}}> Check out my blog on Medium  </h1>
            
            < a href="https://wendyharris8765.medium.com/"
                > 
                <img src = "https://lever-client-logos.s3.us-west-2.amazonaws.com/762fd4bd-7d50-4ac3-80d3-bad44702bf87-1604363697348.png" 
                     alt="Medium-icon" style={{ 
                        maxWidth: '140px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        alignItems: 'center', 
                        textAlign: 'center',  

                     }}
                     />
                 </a>
            </div>
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


              
            </div>
        </div>
    )
}


export default Blog 
