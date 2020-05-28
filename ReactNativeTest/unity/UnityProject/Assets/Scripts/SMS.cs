using easyar;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SMS : MonoBehaviour
{
	public Animation animation;
	public GameObject easyARCamera;
	public Text messageText;
	private int _count;
	public ImageTargetController easyARTarget;

	void Awake()
	{
		UnityMessageManager.Instance.OnMessage += toggleEasyAR;
		_count = 0;

		easyARTarget.TargetFound += SendOnToReact;
		easyARTarget.TargetLost += SendOffToReact;
	}

	void onDestroy()
	{
		UnityMessageManager.Instance.OnMessage -= toggleEasyAR;
	}

	private void Update()
	{
	}

	public void SendOnToReact()
	{
		Debug.Log("ON");
		UnityMessageManager.Instance.SendMessageToRN("on");
	}
	public void SendOffToReact()
	{
		Debug.Log("OFF");
		UnityMessageManager.Instance.SendMessageToRN("off");
	}

	void toggleEasyAR(string message)
	{
		messageText.text = _count + " " + message;
		_count++;

		if (animation.isPlaying)
		{
			animation.Stop();
			easyARCamera.SetActive(true);
		}
		else
		{
			animation.Play();
			easyARCamera.SetActive(false);
		}
	}
}
