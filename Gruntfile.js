// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: 
        {
            // LESS файлы
            less:
            {
            	src:
            	[
            		'sourcefiles/css/less/**/*.less',
            	],
            	dest: 'sourcefiles/css/styles.less'
            },
        },
        // конвертируем LESS в CSS
        less:
        {
        	styles:
        	{
        		src:
        		[
        			'sourcefiles/css/styles.less'
        		],
        		dest: 'production/css/styles.css'
        	}
        },
        jade: 
        {
            compile: 
            {
                options:
                {
                    pretty: true
                },
                files: 
                [
                    {
                        src: 
                        [ 
                            '**/*.jade' 
                        ],
                        dest: 'production/',
                        expand: true,
                        ext: '.html',
                        cwd: 'sourcefiles/html/'
                    }
                ]
            }
        },
        //Сжимаем cкрипты
        uglify: 
        {
            scripts: 
            {
                src: 
                [
              	  '/sourcefiles/js/scripts.js'
                ],
                dest: '/production/js/scripts.min.js'
            },
        },
        // Проверка изменений
        watch: 
        {
			less: 
			{
				files: ['sourcefiles/css/less/**/*.less',],
				tasks: ['concat', 'less']
			},
            jade:
            {
                files: ['sourcefiles/html/**/*.jade',],
                tasks: ['jade']
            },
			js: {
				files: ['sourcefiles/js/**/*.js'],
				tasks: ['concat', 'uglify']
			},
		}
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    
    // Задача по умолчанию
    grunt.registerTask('default', ['watch']);
};