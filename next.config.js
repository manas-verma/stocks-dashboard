module.exports = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/api/:path*',
                    destination: 'https://stock-trader-api.herokuapp.com/:path*' // Proxy to Backend
                }
            ]
        }
    }
}