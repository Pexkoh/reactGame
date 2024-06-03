import Page from "./page";


function DoublePage( {pageContent1, handleKeyDown1, pageContent2, handleKeyDown2} ) {

    return (
        <>
        <Page pageContent={pageContent1} handleKeyDown={handleKeyDown1} />
        <Page pageContent={pageContent2} handleKeyDown={handleKeyDown2} />
        </>
    )
}


export default DoublePage;