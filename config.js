module.exports = {
	host: "http://127.0.0.1",
	port: 3000,
	db: {
		mongodb: {
			host: '127.0.0.1',
			port: 27017,
			name: 'test' //dbname
		},
		redis: {
			host: '127.0.0.1',
			port: 6379
		},
		mysql: {
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'test'
		},
		memcached: {
			host: '127.0.0.1',
			port: 11211 
		}
	}
};