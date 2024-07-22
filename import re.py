# Import libraries
import pandas as pd
import numpy as np
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import BernoulliNB
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, f1_score

# Load the Sentiment140 dataset
# (Replace with the actual path to your uploaded dataset)
data = pd.read_csv("path/to/Sentiment140.csv", encoding="ISO-8859-1", header=None)

# Preprocessing: Clean, tokenize, and remove stopwords
# (Implement these steps based on the guidelines mentioned earlier)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data[5], data[0], test_size=0.2, random_state=42)

# TF-IDF vectorization
tfidf_vectorizer = TfidfVectorizer(max_features=5000)
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_test_tfidf = tfidf_vectorizer.transform(X_test)

# Train classifiers
lr_model = LogisticRegression()
nb_model = BernoulliNB()
svm_model = SVC()

lr_model.fit(X_train_tfidf, y_train)
nb_model.fit(X_train_tfidf, y_train)
svm_model.fit(X_train_tfidf, y_train)

# Evaluate models
y_pred_lr = lr_model.predict(X_test_tfidf)
y_pred_nb = nb_model.predict(X_test_tfidf)
y_pred_svm = svm_model.predict(X_test_tfidf)

print("Logistic Regression Accuracy:", accuracy_score(y_test, y_pred_lr))
print("Bernoulli Naive Bayes Accuracy:", accuracy_score(y_test, y_pred_nb))
print("SVM Accuracy:", accuracy_score(y_test, y_pred_svm))
print("Logistic Regression F1 Score:", f1_score(y_test, y_pred_lr))
# Repeat for other classifiers

# You can save the trained model for future use
# (e.g., using joblib or pickle)
