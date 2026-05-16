# Otomatik Portfolyo Dağıtım Pipeline Projesi (CI/CD)

Bu proje; HTML, CSS ve JavaScript ile geliştirilmiş statik portfolyo web sitesinin, kod değişikliklerinin ardından otomatik olarak AWS S3 üzerinde canlıya alınmasını otomatize etmek amacıyla geliştirilmiş bir DevOps altyapı çalışmasıdır.

## 🚀 Mimari ve İş Akışı

* **Ön Yüz (Frontend):** HTML5, CSS3, JavaScript
* **CI/CD Aracı:** GitHub Actions
* **Bulut Sağlayıcı:** AWS (S3, IAM)
* **Tetiklenme Stratejisi:** Geliştirici yerel bilgisayarından `portfolio` dalına (branch) kodları `push`ladığı anda otomatik dağıtım süreci başlar.

---

## 🛠️ Uygulanan DevOps Kavramları ve Pratikleri

* **Sürekli Dağıtım (Continuous Delivery - CD):** AWS CLI `sync` komutu `--delete` parametresi ile entegre edilmiştir. Bu sayede lokalde silinen dosyalar AWS S3 üzerinden de otomatik olarak temizlenir ve canlı ortamın her zaman güncel kalması sağlanır.
* **En Düşük Yetki Prensibi (Least Privilege):** GitHub Actions'a tüm AWS hesabını yönetme yetkisi vermek yerine, sadece ilgili S3 bucket'ına okuma/yazma/silme izni tanıyan kısıtlı ve özel bir **IAM Politikası (JSON)** tanımlanmıştır.
* **Güvenli Kimlik Yönetimi (Secret Management):** AWS erişim anahtarları (Access Key) kod içerisine gömülmemiş, GitHub deponun şifrelenmiş **Actions Secrets** katmanında güvenli bir şekilde saklanmıştır.

---

## 💻 Pipeline Yapılandırması (.github/workflows/deploy.yml)

Süreç, GitHub Actions üzerinde koşan bir `ubuntu-latest` sanal makinesinde şu adımlarla gerçekleşir:
1. Depodaki güncel kodlar iş alanına çekilir (`checkout`).
2. Güvenli saklanan anahtarlar ile AWS kimlik doğrulaması yapılır (`configure-aws-credentials`).
3. Değişen dosyalar Frankfurt (`eu-central-1`) bölgesindeki S3 bucket'ına senkronize edilir (`aws s3 sync`).
