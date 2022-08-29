// 将驼峰转换为横杠链接的
export const toLine=(value:string)=>{
    return value.replace(/(A-Zg)/,'-$1').toLocaleLowerCase()
}