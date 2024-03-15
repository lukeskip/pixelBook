import React,{useState,useEffect} from 'react';
import projects from '../utils/projects'
import { useParams,useNavigate } from 'react-router-dom';
import Menu from '../components/Menu'
import Button from '../components/Button'

export default function Project() {
    let { id } = useParams();
    const [project,setProject] = useState({});
    const navigate = useNavigate();
    const handleNavigate = (diff)=>{
        const nextId = Number(id) + diff;
        const nextProject = checkProject(nextId);
        if (nextProject) {
            navigate(`/project/${nextId}`);
        }
    }

    const checkProject = (nextId)=>{
        return  projects.find((item) => item.id === nextId);
    }

    const handleGoToLink = (link)=>{
        window.open(link,"_blank")
    } 
   
    useEffect(()=>{
        
        const currentProject = projects.find((item)=> item.id === Number(id));
        setProject(currentProject);
    },[id]);

    return (
        <>

        <main className='project' style={{backgroundImage:`url(${project.backgroundImage})`}}>
            <div className="container">
                {project && (
                <>
                    {checkProject(Number(id) +1 ) && <div className="next" onClick={()=>handleNavigate(+1)}>{">"}</div>}
                    
                     {checkProject(Number(id) -1 ) && <div className="previous" onClick={()=>handleNavigate(-1)}>{"<"}</div>}
                    <Menu/>
                    <div className="description">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        {/* {project.gitHub && <Button label="GitHub" icon={{collection:"fa-brands",name:"github"}} callback={() => handleGoToLink(project.gitHub)} />}
                        {project.tryIt && <Button label="Try it" icon={{collection:"fa-solid",name:"eye"}} callback={() => handleGoToLink(project.tryIt)} />} */}
                        
                        <div className="tags">

                        {project.tags && project.tags.map((tag,index)=>{
                            return <div key={index} className="tag">{tag}</div>
                        })}
                        </div>
                    </div>
                    <div className="image">
                        <img src={`${project.screenCapture}`} alt="" />
                    </div>
                </>)}
                
            </div>
        </main>
       
        </>
    )
}
