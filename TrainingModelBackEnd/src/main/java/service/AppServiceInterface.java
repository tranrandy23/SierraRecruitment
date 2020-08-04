package service;

import java.util.List;

import bean.FeedbackData;
import bean.User;
import bean.UserFeedback;

public interface AppServiceInterface {
	public void addUser(UserFeedback uf);
	public List<User> getAllUser();
	public UserFeedback update(int id, FeedbackData fbdata);
	public String getAllFeedback(int id);
}
