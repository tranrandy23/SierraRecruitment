package model;
import java.util.*;

public class Candidates {
	private List<Candidate> candidateList;
	
	public List<Candidate> getCandidateList()
	{
		if(candidateList==null)
		{
			candidateList=new ArrayList<Candidate>();
		}
		return candidateList;
	}
	public void setCandidateList(List<Candidate> candidateList) {
		this.candidateList=candidateList;
	}
}
