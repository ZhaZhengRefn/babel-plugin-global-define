const memberExpressionMatcher = (path, key) => path.matchesPattern(key)
const identifierMatcher = (path, key) => path.node.name === key

const replacer = (path, value, valueToNode) => {
    path.replaceWith(valueToNode(value))

    if(path.parentPath.isBinaryExpression()){
        const result = path.parentPath.evaluate()
        if(result.confident){
            path.parentPath.replaceWith(valueToNode(result.value))
        }
    }
}

export default function ({ types: t }){
    return {
        visitor: {
            MemberExpression(path, { opts: params }){
                Object.keys(params).forEach(key => {
                    if(memberExpressionMatcher(path, key)){
                        replacer(path, params[key], t.valueToNode)
                    }
                })
            },
        
            Identifier(path, { opts: params }){
                Object.keys(params).forEach(key => {
                    if(identifierMatcher(path, key)){
                        replacer(path, params[key], t.valueToNode)
                    }           
                })
            },
        }        
    }
}