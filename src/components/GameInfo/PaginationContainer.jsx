import React, {useEffect} from 'react';
import GameContainer from "./GameContainer"
import Button from 'react-bootstrap/Button'

export default function PaginationContainer({
    setPage = () => console.log('setPage must be passed in', ),
    currPage = 1,
    games = [],
    totalPages = 1,
    children,
    ...props
}){

    useEffect(() => {
        // Scroll to the top of the page if games array has been updated due to page change 
        if (games.length && window.scrollY != '0'){
            window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth' 
                });
        }
    }, [games])

    const updatePage = (page) => {
        setPage((prevParams) => {
            prevParams.set('page', page);
            return prevParams;
        }, {replace: true})
    }

    return(
        <> 
            <GameContainer games={games} pageString={games.length ? `Showing page ${currPage} of ${totalPages}` : ''} {...props}>
                {children}
            </GameContainer>
            {games.length ?
                <span className="pt-2 pb-5 ">
                    <p className="currentPage"> Showing page {currPage} of {totalPages} </p>
                    <div className="d-flex justify-content-center">
                        {currPage > 1 &&
                            <Button className="me-2"  variant="danger" onClick={() => updatePage(parseInt(currPage) - 1) }> Prev Page</Button>
        
                        }
                        {currPage !== totalPages &&
                            <Button className="ms-2"  variant="danger" onClick={() => updatePage(parseInt(currPage) + 1) }> Next Page</Button>
                        }
                    </div>
                </span>
                : null
            }
        </>
    )
}