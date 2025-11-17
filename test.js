Ok, mình sẽ tạo cho bạn **một số chuỗi giả lập** (dummy) để **khớp với regex trong SENSITIVE_PATTERNS**, nhưng **không phải dữ liệu thật** và hoàn toàn an toàn để test.

---

# ✅ **API Keys**

```
api_key="abcdEFGH1234ijklMNOP5678"
apikey='XYZ_1234567890_TEST_API_KEY'
"1234567890abcdefABCDEF1234567890"
```

---

# ✅ **AWS Keys**

```
AKIA1234567890ABCD
aws_access_key_id="ABCDEFGHIJKLMNOPQRST"
aws_secret_access_key="a1B2c3D4e5F6g7H8i9J0K1L2M3N4O5P6Q7R8S9T"
AIDA1234567890WXYZ1234
da2-abc123def456ghi789jkl012mn
```

---

# ✅ **Passwords**

```
password="SuperSecret123!"
pwd='Pa55wordXYZ'
passwd="myStrongPass_2024"
```

---

# ✅ **Tokens**

```
token="abcdEFGHijklMNOPqrstUVWX1234"
access_token='XYZ_token_1234567890_TEST'
bearer AbCdEfGhIjKlMnOpQrStUvWxYz123456
jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakepayloadsignature1234567890abcd"
ya29.A0AVA9yFakeTokenForTestingDataOnly
```

---

# ✅ **Private Keys**

*(chỉ header để khớp regex — không chứa khóa thật)*

```
-----BEGIN PRIVATE KEY-----
-----BEGIN RSA PRIVATE KEY-----
-----BEGIN EC PRIVATE KEY-----
-----BEGIN OPENSSH PRIVATE KEY-----
-----BEGIN PGP PRIVATE KEY BLOCK-----
```

---

# ✅ **Database**

```
mysql://user:mydbPassword123@localhost:3306/db
postgresql://admin:PgPass_XYZ123@db.example.com/test
mongodb://root:MongoPass!@cluster0.example.net
connection_string="Server=db;User=test;Password=Pass1234!;Database=mydb"
```

---

# ✅ **OAuth**

```
client_secret="OAuthSecretKey1234567890"
oauth_secret='OAUTH_9876543210_SECRET'
```

---

# ✅ **GitHub**

```
"GitHub" "abcdefghijklmno1234567890ABCDEFGHIJKL"
ghp_1234567890abcdefABCDEF1234567890abcd
github_pat_ABCDEF1234567890123456_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNO123456789
```

---

# ✅ **Google API**

```
AIzaSyA1234567890abcdefABCDEFghijklmnoP
123456789012-abcdefABCDEFghijklmnopqrstuvwx.apps.googleusercontent.com
"type": "service_account"
```

---

# ✅ **Azure**

```
DefaultEndpointsProtocol=https;AccountName=teststorage;AccountKey=ABCDEF1234567890abcdef+/testKey1234567890;
```

---

# ✅ **PII**

```
john.doe@example.com
123-45-6789
4111-1111-1111-1111
```
test
---

# ✅ **Credentials**

```
ftp://user123:passABC@server.example.com 
```

---

# ✅ **Error Messages**

```
stack trace: NullReferenceException
at MyApp.Service.Run(line 42)
Exception in thread "main" java.lang.RuntimeException
```

---

# 🔥 Nếu bạn muốn, mình có thể tạo:

* một **file JSON, YAML hoặc .env** chứa full dữ liệu
* **100+ chuỗi test** để bạn QA/regex test
* phát sinh bằng code Python

Chỉ cần nói định dạng bạn muốn.
