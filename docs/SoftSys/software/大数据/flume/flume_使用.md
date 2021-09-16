# flume 使用

```shell
flume-ng agent -c /home/jelly/flume_exec -f flume1.conf -n a1 -Dflume.root.logger=INFO,console

flume-ng agent -c conf -f test2.conf -n agent -Dflume.root.logger=INFO,console
```
