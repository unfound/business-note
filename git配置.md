# git配置

## 生成秘钥
```bash
ssh-keygen -t rsa -C "your@email.com"
```
## 全局设置username和email
```bash
git config --global user.name "username"
git config --global user.email "username@gmail.com"
```
## 设置代理
```bash
git config --global http.proxy "http://example.com:port"
git config --global https.proxy "http://example.com:port"
# 针对github的单独配置
git config --global http.https://github.com.proxy "http://example.com:port"
```
## 使用https访问git远程仓库抛出找不到本地证书，可以先关闭检查
```bash
git config --global http.sslVerify false
```
## git 设置不用每次都输入账号密码
```bash
git config --global credential.helper store
```
> 相关问题可以参考官网文档，git工具--[凭证存储](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8#_credential_caching)