# ab性能测试工具

## 安装

此工具包含在apache中，如需独立安装自行百度

## 简介

`ab（ApacheBench）`可以用来测试web服务器的执行效率。ab包含在[Apache](../web服务器/apache/README.md)安装目录bin目录下。
ab可以针对某一特定URL模拟出连续的联机请求，同时还可以仿真出同时间点个数相同的联机请求，
因而可以利用ab帮助我们在网站开发期间仿真实际上线可能的情况，利用仿真出来的数据做为调整服务器设定或程序的依据。

## 用法

```shell
ab [options] [http[s]://]hostname[:port]/path
```

例如：

```shell
ab -n 100 -c 10 http://www.baidu.com/
```

## 参数详解

| 参数 | 含义 |
|---|---|
|-n requests     |Number of requests to perform 请求次数                                         |
|-c concurrency  |Number of multiple requests to make 同一时间发出多少个请求（并行连接）         |
|-t timelimit    |Seconds to max. wait for responses   等待响应时间|
|-p postfile     |File containing data to POST                                                     |
|-T content-type |Content-type header for POSTing                                                  |
|-v verbosity    |How much troubleshooting info to print                                           |
|-w              |Print out results in HTML tables                                                 |
|-i              |Use HEAD instead of GET                                                          |
|-x attributes   |String to insert as table attributes                                             |
|-y attributes   |String to insert as tr attributes                                                |
|-z attributes   |String to insert as td or th attributes                                          |
|-C attribute    |Add cookie, eg. 'Apache=1234. (repeatable)                                       |
|-H attribute    |Add Arbitrary header line, eg. 'Accept-Encoding: gzip'                           |
|                |Inserted after all normal header lines. (repeatable)                             |
|-A attribute    |Add Basic WWW Authentication, the attributes  http验证, 分隔传递用户名及密码   |
|                |are a colon separated username and password.                                     |
|-P attribute    |Add Basic Proxy Authentication, the attributes                                   |
|                |are a colon separated username and password.                                     |
|-X proxy:port   |Proxyserver and port number to use                                               |
|-V              |Print version number and exit  查看ab版本                                      |
|-k              |Use HTTP KeepAlive feature                                                       |
|-d              |Do not show percentiles served table.                                            |
|-S              |Do not show confidence estimators and warnings.                                  |
|-g filename     |Output collected data to gnuplot format file.                                    |
|-e filename     |Output CSV file with percentages served                                          |
|-s              |Use httpS instead of HTTP (SSL)                                                  |
|-h              |Display usage information (this message)                                         |

## 结果

```out
# ab -n 100 -c 5 -k http://www.gaingreat.com/42.html  //必须在后方指定相应文件42.html或加上“/”
This is ApacheBench, Version 2.0.40-dev <$Revision: 1.146 $> apache-2.0
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Copyright 2006 The Apache Software Foundation, http://www.apache.org/

Benchmarking www.gaingreat.com (be patient).....done


Server Software:        nginx  //Web服务器引擎
Server Hostname:        www.gaingreat.com  //服务器地址
Server Port:            80  //服务器端口

Document Path:          /42.html  //请求的文件路径
Document Length:        37927 bytes  //文件大小

Concurrency Level:      5  //并发次数
Time taken for tests:   32.732276 seconds  //测试所需时间
Complete requests:      100  //成功请求次数
Failed requests:        73  //失败请求次数
   (Connect: 0, Length: 73, Exceptions: 0)
Write errors:           0  //写入错误
Keep-Alive requests:    0
Total transferred:      3817232 bytes  //测试过程传输字节数
HTML transferred:       3791532 bytes  //HTML内容传输字节数
Requests per second:    3.06 [#/sec] (mean)  //每秒请求数 ( 平均 )
Time per request:       1636.614 [ms] (mean)  //每次并发请求时间 ( 所有并发 )
Time per request:       327.323 [ms] (mean, across all concurrent requests)  //每一请求时间 ( 并发平均 )
Transfer rate:          113.86 [Kbytes/sec] received  //平均传输速率

Connection Times (ms)  //响应时间小、中、大值
              min  mean[+/-sd] median   max
Connect:       16  183 111.5    192     460
Processing:   793 1427 548.2   1296    3839
Waiting:      300  822 485.0    650    3190
Total:        925 1611 512.8   1447    3891
//以下为所有请求的平均速度，如在测试过程中进度到50%时平均响应时间为1447ms，到66%时
平均响应时间为1567ms
Percentage of the requests served within a certain time (ms)
  50%   1447
  66%   1567
  75%   1667
  80%   1742
  90%   2241
  95%   2793
  98%   3748
  99%   3891
 100%   3891 (longest request)
```
