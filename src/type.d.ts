enum dataType{
    INT,
    Char,
    Vchar,
    boolean,
    
}

interface IMainProps {
}

interface IAppProps {
}

interface IRowProps{
    name:string,
    type:string,
    null:boolean,
    pk:boolean
}

interface IModalViewlProps {
    title:string,
    children?:JSX.Element
}

interface ISidebarProps {
}

interface ITableProps {
    name:string,
    att:IRowProps[],

}

interface ITableOptionsProps {
    left:number,
    top:number,
    onDrag:()=>void,
    onStop:()=>void,
}

interface IArrowProps {
    head:string,
    tail:string
}

interface database{
    schema:ITableProps[],
    rel:IArrowProps[]
}

interface actions{
    handleNewData:(data:string)=>void
    getWindowDimensions:()=>int
}

interface IcontextProps{
    database:database,
    actions:actions,
}

interface IEditorProps {
    data:string
    setData:(d:sting)=>void
}