interface Payload {
    username: string
    password: string
}

interface Result {
    result: boolean
}

interface GoodResult extends Result{
    result: true,
    data: {
        token: string
    }
}

interface BadResult extends Result{
    result: false
}

type ResultAll = GoodResult | BadResult

const get = async (payload: Payload): Promise<ResultAll> => {
    if(payload.username === 'Admin' && payload.password === '12345') {
        return {
            result: true,
            data: {
                token: 'bla.bla.bla'
            }
        }
    } else {
        return {
            result: false
        }
    }
}

export { get }
